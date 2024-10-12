function samplePromise(){
    return Promise.resolve("eko")
}
const data = await samplePromise();
console.info(data);