<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const open = ref(false);
const copied = ref(false);
const btn = ref(null);

function stripHtml(html) {
    return html.replace(/<[^>]*>/g, '');
}

function generateMarkdown() {
    return `# Gautham Mallipeddi
Software Engineer

[LinkedIn](https://www.linkedin.com/in/gautham-mallipeddi/) | [GitHub](https://github.com/gautham-8) | [Resume](https://docs.google.com/document/d/1D9YIwWWVdWsGeWcl1L7n1oT225iZF7APGPB2yBC3F0E/edit?usp=sharing)

I specialize in full-stack development with a keen interest in artificial intelligence and machine learning technologies.

---

## About

Hey! I'm a Software Engineer at SenseHawk, where I develop performant, data-driven SaaS applications for the solar and infrastructure industries. I've worked on Business Intelligence dashboards with interactive charts that render and handle large datasets efficiently, and a web-based Project Management module (similar to P6 and MS Projects) that needed careful thought around UI performance and scalability.

During my undergrad, I had the opportunity to explore AI/ML through multiple projects and publications. My undergraduate major project introduced me to the role of machine learning in healthcare, particularly in developing explainable AI models for brain disease detection. This experience deepened my interest in how AI can support clinical decision-making, improve diagnostics, and ultimately make healthcare more accessible and effective.

As I continue growing as an engineer, I aim to contribute to technology that doesn't just work well, but truly makes an impact.

---

## Work Experience

### Software Engineer - [SenseHawk](https://www.sensehawk.com)
**JUN 2024 - PRESENT**

- Secured high-value contracts with major clients, including a global energy leader, by developing the 'Business Intelligence' module in TaskMapper, which offers dashboards for complex data visualization.
- Developed 80%+ of the UI for SenseHawk's first AI agent, NaaviX, featuring data visualization and real-time message streaming to reduce manual analysis time from 3+ hours to minutes.
- Built Node.js export service consuming Amazon SQS events to generate dashboard PDFs via Browserless with custom pagination logic and scheduled email delivery to configured recipients.
- Contributed to the 'Project Management' module in TaskMapper, accounting for 30% of user traffic, by enabling advanced features to effectively compete with and win business from users of legacy systems like Oracle Primavera. This supported SenseHawk's then record monthly revenue and $6 million in ARR.

**Skills:** Vue.js, Vite, Pinia, Git, GitHub, npm, pnpm, Sass, CSS, HTML, VS Code

---

### Software Engineer Intern - [SenseHawk](https://www.sensehawk.com)
**NOV 2022 - MAY 2024**

- Refined my SaaS application development skills by working on one of SenseHawk's best-selling modules, 'Project Management', utilizing third-party libraries such as DHTMLX Gantt to meet our requirements.
- Achieved a 82% reduction in size for the web application's main bundle, slashing it from over 3.7MB to approximately 1000kB. This optimization greatly enhances the loading time of the homepage.
- Boosted application security by implementing ways to prevent XSS attacks and CSV injections.
- Regularly updated frontend packages and dependencies, implementing migration changes as needed.

**Skills:** Vue.js, Vite, Pinia, Git, GitHub, npm, pnpm, Sass, CSS, HTML, VS Code

---

## Education

### B.Tech in Computer Science and Engineering
**[VNR Vignana Jyothi Institute of Engineering and Technology](https://vnrvjiet.ac.in/)**
DEC 2020 – MAY 2024 | 8.96 CGPA

**Relevant Courses:** Data Structures and Algorithms, Object Oriented Programming through C++, Database Management Systems, Operating Systems, Computer Networks, Network Security, Artificial Intelligence, Machine Learning

---

## Projects

### [Multiple Brain Disease Detection using Explainable AI](https://ijisae.org/index.php/IJISAE/article/view/6315)
A research project dedicated to creating an Explainable Artificial Intelligence (XAI) model for classifying MRI images while providing transparent and interpretable predictions. Key topics include AI transparency, model explainability, and brain region analysis to clarify how specific areas influence each decision. The project addresses the trust gap between AI and clinical practice by empowering healthcare professionals to make more accurate and confident diagnoses using AI-driven diagnostic tools.

**Skills:** Python, TensorFlow, PyTorch, Scikit-learn, VS Code, Anaconda

---

### [Guiding the Learner in Selecting the Suitable Online Course Using Automated AI Tool](https://stm.bookpi.org/RATMCS-V7/article/view/12833)
A project focused on CourseAI, an AI-powered tool designed to help students efficiently select top and relevant online courses. Topics covered include personalized course recommendations, AI-based course evaluation, filtering by factors like difficulty and student reviews, and addressing the growing challenge of identifying quality courses. CourseAI aims to bridge passive online learning with active learning experiences, providing a hybrid educational approach tailored to student interests and career goals.

**Skills:** React.js, Python, Flask, Git, GitHub, VS Code | [GitHub](https://github.com/deepesh-16/course-ai)

---

### [Problem setter and Peer-learning guide - Turing Hut](https://www.turinghut.org/turingcup)
A collaborative project to develop the webpage for Turing Hut's flagship coding contest, the Turing Cup, which achieved over 1,000 team registrations and 2,000+ participants. As a problem setter, I have set problems for contests with global participation. I have also taught various competitive programming topics like bit manipulation, binary search in the peer learning sessions conducted by Turing Hut.

**Skills:** React.js, Material UI, Git, GitHub | [GitHub](https://github.com/linustribevnr/turing-hut-website)

---

### [Technical Member - TEDxVNRVJIET](https://github.com/tedxvnrvjiet/gh-tedxvnrvjiet)
Developed a TEDx event website that sold tickets worth over ₹75,000. The website was set up from scratch on tedxvnrvjiet.com, but is no longer under maintenance by the institution (as of March 2026).

**Skills:** React.js, Tailwind CSS, Sass, CSS, HTML, Git, GitHub | [GitHub](https://github.com/tedxvnrvjiet/gh-tedxvnrvjiet)

---

### [Hospital website - Managing appointments made easy!](https://github.com/gautham-8/Hospital-Website-Project)
Developed a full-stack web application enabling patients to conveniently book doctor appointments from home, minimizing hospital wait times. The platform also provides detailed information on various hospital services.

**Skills:** React.js, Node.js, Express.js, MongoDB, Git, GitHub | [GitHub](https://github.com/gautham-8/Hospital-Website-Project)
`;
}

async function copyMarkdown() {
    await navigator.clipboard.writeText(generateMarkdown());
    copied.value = true;
    open.value = false;
    setTimeout(() => copied.value = false, 2000);
}

function viewMarkdown() {
    const blob = new Blob([generateMarkdown()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    open.value = false;
}

function handleOutsideClick(e) {
    if (btn.value && !btn.value.contains(e.target)) open.value = false;
}

onMounted(() => document.addEventListener('mousedown', handleOutsideClick));
onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick));
</script>

<template>
    <div ref="btn" class="relative w-fit">
        <div class="flex items-center border border-gray-600 rounded-md overflow-hidden text-xs text-gray-300 hover:border-gray-400 transition-colors">
            <button class="px-3 py-1.5 hover:bg-white/5 transition-colors flex items-center gap-1.5" @click="copyMarkdown">
                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {{ copied ? 'Copied!' : 'Copy page' }}
            </button>
            <button class="px-2 py-1.5 border-l border-gray-600 hover:bg-white/5 transition-colors" @click="open = !open">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
        </div>

        <div v-if="open" class="absolute left-0 top-full mt-1 w-44 bg-[#0a2a4a] border border-gray-600 rounded-md shadow-lg z-50 overflow-hidden text-xs">
            <button class="w-full text-left px-3 py-2 flex items-center gap-2 text-gray-300 hover:bg-white/5 transition-colors" @click="copyMarkdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                Copy Markdown
            </button>
            <button class="w-full text-left px-3 py-2 flex items-center gap-2 text-gray-300 hover:bg-white/5 transition-colors" @click="viewMarkdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                View as Markdown
            </button>
        </div>
    </div>
</template>
