// Node discovery script

async function listModels() {
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        console.error("VITE_GEMINI_API_KEY not found in .env");
        return;
    }

    console.log("Checking v1beta models...");
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();
        if (data.models) {
            console.log("Available v1beta models:");
            data.models.forEach(m => console.log(` - ${m.name}`));
        } else {
            console.log("No models found in v1beta or error:", JSON.stringify(data));
        }
    } catch (e) {
        console.error("Error fetching v1beta:", e.message);
    }

    console.log("\nChecking v1 models...");
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
        const data = await response.json();
        if (data.models) {
            console.log("Available v1 models:");
            data.models.forEach(m => console.log(` - ${m.name}`));
        } else {
            console.log("No models found in v1 or error:", JSON.stringify(data));
        }
    } catch (e) {
        console.error("Error fetching v1:", e.message);
    }
}

listModels();
