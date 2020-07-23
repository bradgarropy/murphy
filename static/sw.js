self.addEventListener("install", () => {
    console.log("service worker installed")
})

self.addEventListener("fetch", () => {
    console.log("service worked detected fetch")
})
