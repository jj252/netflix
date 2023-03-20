const pauseThenLog = (pause) =>
    new Promise((resolve,reject) => {
    if (pause) {
        setTimeout(() => resolve(`Paused for ${pause} milliseconds`),pause);
    } else {
        reject('No pause was specified');
    }
});

const pauseThenLog2 = (pause) =>
    console.log('Ive waited a bit')


const runTest = async (pause) =>{
    console.log('Starting run...')
    await pauseThenLog(pause);
    console.log(`You just waited ${pause} milliseconds`)
}

runTest(5000);

