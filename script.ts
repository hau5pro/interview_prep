async function script() {
  // script here

  console.log("done");
  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
scriptt().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
