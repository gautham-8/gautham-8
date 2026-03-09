<script setup>
import { onMounted, onUnmounted } from 'vue';
import LeftSection from './LeftSection.vue';
import RightSection from './RightSection.vue';

let canvas, ctx, particles = [], animFrame;

function spawnParticle(x, y) {
    particles.push({
        x,
        y,
        radius: Math.random() * 3 + 1.5,
        alpha: 1,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.2 + 0.4),
        color: `hsl(${200 + Math.random() * 40}, 90%, ${70 + Math.random() * 20}%)`,
    });
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.022;
        p.radius *= 0.97;

        if (p.alpha <= 0) { particles.splice(i, 1); continue; }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
        grad.addColorStop(0, p.color.replace(')', `, ${p.alpha})`).replace('hsl', 'hsla'));
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
    }

    animFrame = requestAnimationFrame(loop);
}

onMounted(() => {
    canvas = document.getElementById('trail-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    let lastX = 0, lastY = 0;
    document.addEventListener('mousemove', (e) => {
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        const count = Math.min(Math.floor(speed / 4) + 1, 6);
        for (let i = 0; i < count; i++) spawnParticle(e.clientX, e.clientY);
        lastX = e.clientX; lastY = e.clientY;
    });

    loop();
});

onUnmounted(() => {
    cancelAnimationFrame(animFrame);
});
</script>

<template>
    <canvas id="trail-canvas" class="fixed inset-0 pointer-events-none z-0"></canvas>
    <div class="md:flex hidden">
        <LeftSection class="w-2/5 sticky top-0 h-[calc(100vh)]" />
        <RightSection class="w-3/5" />
    </div>
    <div class="md:hidden">
        <LeftSection class="w-full" />
        <RightSection class="w-full" />
    </div>
</template>
