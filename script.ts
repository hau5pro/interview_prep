//
//

async function script() {
  // script here

  console.log("done");
  process.exit(0);
}

// time O()
// space O()

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
