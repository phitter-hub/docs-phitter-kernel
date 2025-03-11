<template>
    <div id="galtonCanvasContainer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Matter from "matter-js";

export default defineComponent({
    name: "GaltonBoard",
    setup() {
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Runner = Matter.Runner;
        return { Engine, Render, World, Bodies, Runner };
    },
    data() {
        return {
            // Canvas Configuration
            canvasConfig: {
                width: 400,
                height: 700,
                backgroundColor: this.getCssVariable("--background-color-1"),
                borderWidth: 15,
                borderColor: this.getCssVariable("--galton-border-color"),
            },
            // Ramp Configuration
            rampConfig: {
                height: 30,
                channelWidth: 30,
                angle: 22,
                percentageY: 0.06,
            },
            // Nails Configuration
            nailsConfig: {
                color: this.getCssVariable("--galton-nails-color"),
                yMarginInit: 45,
                yMargin: 2.2,
                radius: 6,
                xMargin: 24,
                structure: [
                    { id: 1, nails: 9 },
                    { id: 2, nails: 12 },
                    { id: 3, nails: 15 },
                    { id: 4, nails: 14 },
                    { id: 5, nails: 15 },
                    { id: 6, nails: 14 },
                    { id: 7, nails: 15 },
                    { id: 8, nails: 14 },
                    { id: 9, nails: 15 },
                    { id: 10, nails: 14 },
                    { id: 11, nails: 15 },
                    { id: 12, nails: 14 },
                    { id: 13, nails: 15 },
                    { id: 14, nails: 14 },
                    { id: 15, nails: 15 },
                ],
            },
            // Walls Configuration
            wallsConfig: {
                width: 8,
                color: this.getCssVariable("--galton-walls-color"),
            },
            // Balls Configuration
            ballsConfig: {
                number: 1200,
                radius: 3,
                colors: [
                    this.getCssVariable("--galton-ball-color1"),
                    this.getCssVariable("--galton-ball-color2"),
                    this.getCssVariable("--galton-ball-color3"),
                    this.getCssVariable("--galton-ball-color4"),
                    this.getCssVariable("--galton-ball-color5"),
                    this.getCssVariable("--galton-ball-color1"),
                ],
                friction: 0.00001,
                restitution: 0.7,
                density: 0.001,
                frictionAir: 0.042,
                sleepThreshold: 120,
                spawnInterval: 50,
            },
            // Simulation Parameters
            simulationParams: {
                isRunning: true,
                ballCounter: 0,
                ballColorIndex: 0,
                gravity: 1.5,
            },
        };
    },
    computed: {
        borderTop() {
            return this.createBorderRectangle(this.canvasConfig.width / 2, this.canvasConfig.borderWidth / 2, this.canvasConfig.width, this.canvasConfig.borderWidth);
        },
        borderBottom() {
            return this.createBorderRectangle(
                this.canvasConfig.width / 2,
                this.canvasConfig.height - this.canvasConfig.borderWidth / 2,
                this.canvasConfig.width,
                this.canvasConfig.borderWidth
            );
        },
        borderLeft() {
            return this.createBorderRectangle(this.canvasConfig.borderWidth / 2, this.canvasConfig.height / 2, this.canvasConfig.borderWidth, this.canvasConfig.height);
        },
        borderRight() {
            return this.createBorderRectangle(
                this.canvasConfig.width - this.canvasConfig.borderWidth / 2,
                this.canvasConfig.height / 2,
                this.canvasConfig.borderWidth,
                this.canvasConfig.height
            );
        },
        rampWidth() {
            return (this.canvasConfig.width - this.rampConfig.channelWidth) / 2;
        },
        rampLeftTopCoordinates() {
            const x1 = 0;
            const y1 = this.rampConfig.percentageY * this.canvasConfig.height;
            const x2 = x1 + this.rampWidth;
            const y2 = y1 + this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180));
            const x3 = x1 + this.rampWidth;
            const y3 = y2 + this.rampConfig.height;
            const x4 = 0;
            const y4 = y1 + this.rampConfig.height;
            const centerX = this.rampWidth / 2;
            const centerY = y1 + (this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180))) / 2 + this.rampConfig.height / 2;
            return { x1, y1, x2, y2, x3, y3, x4, y4, centerX, centerY };
        },
        rampLeftTop() {
            return this.createParallelogram({ x: this.rampLeftTopCoordinates.centerX, y: this.rampLeftTopCoordinates.centerY }, [
                { x: this.rampLeftTopCoordinates.x1, y: this.rampLeftTopCoordinates.y1 },
                { x: this.rampLeftTopCoordinates.x2, y: this.rampLeftTopCoordinates.y2 },
                { x: this.rampLeftTopCoordinates.x3, y: this.rampLeftTopCoordinates.y3 },
                { x: this.rampLeftTopCoordinates.x4, y: this.rampLeftTopCoordinates.y4 },
            ]);
        },
        rampLeftBottomCoordinates() {
            const x1 = this.rampLeftTopCoordinates.x2;
            const y1 = this.rampLeftTopCoordinates.y2;
            const x2 = this.rampLeftTopCoordinates.x3;
            const y2 = this.rampLeftTopCoordinates.y3;
            const x3 = 0;
            const y3 = y2 + this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180));
            const x4 = 0;
            const y4 = y3 - this.rampConfig.height;
            const centerX = this.rampWidth / 2;
            const centerY = y1 + (this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180))) / 2 + this.rampConfig.height / 2;
            return { x1, y1, x2, y2, x3, y3, x4, y4, centerX, centerY };
        },
        rampLeftBottom() {
            return this.createParallelogram({ x: this.rampLeftBottomCoordinates.centerX, y: this.rampLeftBottomCoordinates.centerY }, [
                { x: this.rampLeftBottomCoordinates.x1, y: this.rampLeftBottomCoordinates.y1 },
                { x: this.rampLeftBottomCoordinates.x2, y: this.rampLeftBottomCoordinates.y2 },
                { x: this.rampLeftBottomCoordinates.x3, y: this.rampLeftBottomCoordinates.y3 },
                { x: this.rampLeftBottomCoordinates.x4, y: this.rampLeftBottomCoordinates.y4 },
            ]);
        },
        rampRightTopCoordinates() {
            const x1 = this.canvasConfig.width;
            const y1 = this.rampConfig.percentageY * this.canvasConfig.height;
            const x2 = x1 - this.rampWidth;
            const y2 = y1 + this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180));
            const x3 = x1 - this.rampWidth;
            const y3 = y2 + this.rampConfig.height;
            const x4 = this.canvasConfig.width;
            const y4 = y1 + this.rampConfig.height;
            const centerX = this.canvasConfig.width - this.rampWidth / 2;
            const centerY = y1 + (this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180))) / 2 + this.rampConfig.height / 2;
            return { x1, y1, x2, y2, x3, y3, x4, y4, centerX, centerY };
        },
        rampRightTop() {
            return this.createParallelogram({ x: this.rampRightTopCoordinates.centerX, y: this.rampRightTopCoordinates.centerY }, [
                { x: this.rampRightTopCoordinates.x1, y: this.rampRightTopCoordinates.y1 },
                { x: this.rampRightTopCoordinates.x2, y: this.rampRightTopCoordinates.y2 },
                { x: this.rampRightTopCoordinates.x3, y: this.rampRightTopCoordinates.y3 },
                { x: this.rampRightTopCoordinates.x4, y: this.rampRightTopCoordinates.y4 },
            ]);
        },
        rampRightBottomCoordinates() {
            const x1 = this.rampRightTopCoordinates.x2;
            const y1 = this.rampRightTopCoordinates.y2;
            const x2 = this.rampRightTopCoordinates.x3;
            const y2 = this.rampRightTopCoordinates.y3;
            const x3 = x2 + this.rampWidth;
            const y3 = y2 + this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180));
            const x4 = x3;
            const y4 = y3 - this.rampConfig.height;
            const centerX = this.canvasConfig.width - this.rampWidth / 2;
            const centerY = y1 + (this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180))) / 2 + this.rampConfig.height / 2;
            return { x1, y1, x2, y2, x3, y3, x4, y4, centerX, centerY };
        },
        rampRightBottom() {
            return this.createParallelogram({ x: this.rampRightBottomCoordinates.centerX, y: this.rampRightBottomCoordinates.centerY }, [
                { x: this.rampRightBottomCoordinates.x1, y: this.rampRightBottomCoordinates.y1 },
                { x: this.rampRightBottomCoordinates.x2, y: this.rampRightBottomCoordinates.y2 },
                { x: this.rampRightBottomCoordinates.x3, y: this.rampRightBottomCoordinates.y3 },
                { x: this.rampRightBottomCoordinates.x4, y: this.rampRightBottomCoordinates.y4 },
            ]);
        },
        nailsYInit() {
            return (
                this.rampConfig.percentageY * this.canvasConfig.height +
                this.rampWidth * Math.tan(this.rampConfig.angle * (Math.PI / 180)) +
                this.rampConfig.height +
                this.nailsConfig.yMarginInit
            );
        },
        nails() {
            const nails: Matter.Body[] = [];
            this.nailsConfig.structure.forEach((row) => {
                nails.push(...this.createRowNails(row));
            });
            return nails;
        },
        wallsN() {
            return this.nailsConfig.structure[this.nailsConfig.structure.length - 1].nails;
        },
        wallsY0() {
            return this.nailsYInit + 2 * this.nailsConfig.radius * this.nailsConfig.structure.length + this.nailsConfig.yMargin * (this.nailsConfig.structure.length - 1);
        },
        wallsYF() {
            return this.canvasConfig.height - this.canvasConfig.borderWidth;
        },
        wallsCenterY() {
            return (this.wallsYF + this.wallsY0) / 2;
        },
        wallsDelta() {
            return (this.wallsN - 1) / 2;
        },
        wallsXMargin() {
            return this.nailsConfig.xMargin;
        },
        wallsCenterX0() {
            return this.canvasConfig.width / 2 - this.wallsXMargin * this.wallsDelta;
        },
        walls() {
            return [...Array(this.wallsN).keys()].map((i) => {
                return this.Bodies.rectangle(this.wallsCenterX0 + i * this.wallsXMargin, this.wallsCenterY, this.wallsConfig.width, this.wallsYF - this.wallsY0, {
                    isStatic: true,
                    sleepThreshold: Infinity,
                    render: {
                        fillStyle: this.wallsConfig.color,
                        visible: true,
                    },
                });
            });
        },
        ballsHeightStop() {
            return this.wallsY0 + 40;
        },
    },
    methods: {
        createBorderRectangle(x: number, y: number, W: number, H: number): Matter.Body {
            return this.Bodies.rectangle(x, y, W, H, {
                isStatic: true,
                sleepThreshold: Infinity,
                density: 10000,
                render: {
                    fillStyle: this.canvasConfig.borderColor,
                    visible: true,
                },
            });
        },
        createParallelogram(center: { x: number; y: number }, vertices: { x: number; y: number }[]) {
            return Matter.Body.create({
                position: center,
                vertices: vertices,
                sleepThreshold: Infinity,
                isStatic: true,
                density: 10000,
                render: {
                    fillStyle: this.canvasConfig.borderColor,
                    visible: true,
                },
            });
        },
        createRowNails(row: { id: number; nails: number }) {
            let delta: number;
            let centerX0: number;
            let centerY: number;

            if (row.id % 2 !== 0) {
                delta = (row.nails - 1) / 2;
                centerX0 = this.canvasConfig.width / 2 - this.nailsConfig.xMargin * delta;
                centerY = this.nailsYInit + this.nailsConfig.radius + (this.nailsConfig.yMargin + 2 * this.nailsConfig.radius) * (row.id - 1);
            } else {
                delta = row.nails / 2;
                centerX0 = this.canvasConfig.width / 2 - this.nailsConfig.xMargin * delta + this.nailsConfig.xMargin / 2;
                centerY = this.nailsYInit + this.nailsConfig.radius + (this.nailsConfig.yMargin + 2 * this.nailsConfig.radius) * (row.id - 1);
            }

            const rowNails = [...Array(row.nails).keys()].map((i) => {
                return this.Bodies.circle(centerX0 + i * this.nailsConfig.xMargin, centerY, this.nailsConfig.radius, {
                    frictionStatic: 0.00001,
                    isStatic: true,
                    sleepThreshold: Infinity,
                    render: {
                        fillStyle: this.nailsConfig.color,
                    },
                });
            });

            return rowNails;
        },
        randomInteger(a: number, b: number) {
            return a + Math.random() * (b - a);
        },
        createBall() {
            const ballX = this.randomInteger(this.canvasConfig.borderWidth, this.canvasConfig.width - this.canvasConfig.borderWidth);

            const color = this.ballsConfig.colors[this.simulationParams.ballColorIndex];
            this.simulationParams.ballColorIndex = (this.simulationParams.ballColorIndex + 1) % this.ballsConfig.colors.length;

            const ball = this.Bodies.circle(ballX, this.canvasConfig.borderWidth, this.ballsConfig.radius, {
                friction: this.ballsConfig.friction,
                restitution: this.ballsConfig.restitution,
                density: this.ballsConfig.density,
                frictionAir: this.ballsConfig.frictionAir,
                sleepThreshold: this.ballsConfig.sleepThreshold,
                render: {
                    fillStyle: color,
                },
            });

            return ball;
        },
        simulate(engine: Matter.Engine) {
            // Generate a ball every spawnInterval milliseconds until we reach the configured number
            setInterval(() => {
                if (this.simulationParams.isRunning) {
                    const ball = this.createBall();

                    // When the ball starts "sleeping", mark it as static (without stopping the simulation)
                    Matter.Events.on(ball, "sleepStart", () => {
                        Matter.Body.setStatic(ball, true);
                    });

                    this.World.add(engine.world, ball);
                    this.simulationParams.ballCounter++;

                    if (this.simulationParams.ballCounter >= this.ballsConfig.number) {
                        this.simulationParams.isRunning = false;
                    }
                }
            }, this.ballsConfig.spawnInterval);
        },
        getCssVariable(variableName: string) {
            if (typeof window === "undefined") {
                return "";
            }
            return window.getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
        },
    },
    mounted() {
        const engine = this.Engine.create({ enableSleeping: true });
        engine.gravity.y = this.simulationParams.gravity;

        const render = this.Render.create({
            element: document.getElementById("galtonCanvasContainer") as HTMLElement,
            engine: engine,
            options: {
                width: this.canvasConfig.width,
                height: this.canvasConfig.height,
                wireframes: false,
                background: this.canvasConfig.backgroundColor,
            },
        });

        this.World.add(engine.world, [
            this.borderTop,
            this.borderBottom,
            this.borderRight,
            this.borderLeft,
            this.rampLeftTop,
            this.rampLeftBottom,
            this.rampRightTop,
            this.rampRightBottom,
            ...this.nails,
            ...this.walls,
        ]);

        this.simulate(engine);

        const runner = this.Runner.create();
        this.Runner.run(runner, engine);
        this.Render.run(render);
    },
});
</script>
