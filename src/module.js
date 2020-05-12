console.log('Module.js');

async function start() {
  return  await Promise.resolve('asunc working!!')
}

start().then(console.log)
