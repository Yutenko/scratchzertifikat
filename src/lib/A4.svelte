<script>
    import { onMount } from "svelte";
    import { QRCodeImage } from "svelte-qrcode-image";
    import html2canvas from "html2canvas";

    let edit = true;
    let predicat = "Zertifikat";
    let title = "Scratch-Spieleentwickler";
    let name = "Xkoo";
    $: scratchProject = null;
    let meta =
        "Spezialwoche Medien & Informatik <br> 26. Februar bis zum 1. März 2024 <br> Schulhaus Stockhorn <br> Konolfingen";

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let data = [];
    let isMultiple = false;

    $: currentDate = day + "-" + month + "-" + year;

    function print() {
        if (isMultiple) {
            next();
        } else {
            singlePrint();
        }
    }

    function singlePrint() {
        const captureElement = document.getElementById("page"); // Select the element you want to capture. Select the <body> element to capture full page.
        html2canvas(captureElement)
            .then((canvas) => {
                canvas.style.display = "none";
                document.body.appendChild(canvas);
                return canvas;
            })
            .then((canvas) => {
                const image = canvas.toDataURL("image/png");
                const a = document.createElement("a");
                a.setAttribute("download", new Date().getTime() + ".png");
                a.setAttribute("href", image);
                a.click();
                canvas.remove();
            });
    }

    function replaceWithQRCode(e) {
        setTimeout(() => {
            scratchProject = e.target.value;
        });
    }

    function importCSV(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            processCSV(text);
            isMultiple = true;
        };

        reader.readAsText(file);
    }

    function processCSV(text) {
        const lines = text.split(/\r?\n/);
        lines.forEach((line) => {
            const columns = line.split(",");
            const name = columns[0];
            const scratchProject = columns[1];
            data.push({ name, scratchProject });
        });
    }

    function next() {
        if (data.length > 0) {
            const d = data.pop();

            name = d.name;
            scratchProject = d.scratchProject;
            singlePrint();
        }
    }
</script>

<input type="file" id="file" accept=".csv" on:change={importCSV} />

<div class="page pixelify-sans" id="page">
    <div class="flex w-[80%] custom-center flex-col">
        <div class="text-7xl text-center -mt-10 pb-20">{predicat}</div>
        <div class="">
            {#if edit}
                <input
                    type="text"
                    placeholder="Scratch-Spieleentwickler"
                    class="text-5xl shadow-md w-full text-center"
                    bind:value={title}
                />
                <input
                    type="text"
                    placeholder="Name"
                    class="text-4xl shadow-md w-full text-center"
                    bind:value={name}
                />
                {#if scratchProject}
                    <div class="mt-10 flex justify-center">
                        <QRCodeImage text={scratchProject} width="200" />
                    </div>
                {:else}
                    <input
                        type="text"
                        placeholder="Link zum Scratchprojekt"
                        class="text-3xl shadow-md w-full text-center"
                        on:paste={replaceWithQRCode}
                        bind:value={scratchProject}
                    />
                {/if}
            {:else}
                <div class="text-5xl w-full text-center">{title}</div>
                <div class="text-4xl w-full text-center">{name}</div>
                <div class="mt-10 flex justify-center">
                    {#if scratchProject}
                        <QRCodeImage text={scratchProject} width="200" />
                    {/if}
                </div>
            {/if}
        </div>
        <div
            class="meta absolute bottom-[9rem] left-0 right-0 text-white w-[30%]"
        >
            {#if edit}
                <div class="text-lg w-full text-center h-[100px] max-h-[100px]">
                    {@html meta}
                </div>
                
            {:else}
                <div class="text-lg w-full text-center h-[100px] max-h-[100px]">
                    {@html meta}
                </div>
            {/if}
        </div>
        <div
            class="absolute text-xl bottom-[2.8rem] right-[5.1rem] standard-font text-white"
        >
            {currentDate}
        </div>
    </div>
</div>
<button on:click={print}>Print</button>

<style>
    .page {
        background-image: url("/Zertifikat.png");
        background-repeat: no-repeat;
        background-size: contain;
        font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    }
    .custom-center {
        margin: 0 auto;
    }
    .pixelify-sans {
        font-family: "Pixelify Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
    div,
    input[type="text"],
    textarea[type="text"] {
        background: transparent;
        border: none;
        resize: none;
    }
    .standard-font {
        font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    }
    .meta {
        margin: 0 auto;
    }
</style>
