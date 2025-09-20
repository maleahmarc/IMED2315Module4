function generateMessage() {
  let userName = document.getElementById("userName").value;
  let userAge = Number(document.getElementById("userAge").value);
  let userStatus = document.getElementById("userStatus").value;
  let userFrag = document.getElementById("userFrag").value;

  console.log({ userName, userAge, userStatus, userFrag });

  let displayName = userName.toUpperCase(); // String method
  let isWholeAge = Number.isInteger(userAge); // Number method

  console.log(`Display Name: ${displayName}`);
  console.log(`Is Whole Age: ${isWholeAge}`);

  let greeting =
    "Hello, " + displayName + "! Let's see if you're a frag head...";
  let message = "";

  // If conditional
  if (userAge < 18) {
    message +=
      greeting +
      " Ah I see you've fallen into the pipeline young, good luck to you wallet in the future young one.<br>";
  } else {
    message +=
      greeting + " Well, well, well... a person after my own heart I see.<br>";
  }

  // Switch statement
  switch (userStatus) {
    case "Yes":
      message +=
        "Congrats! You have also fallen into the hobby of smelly water.";
      break;
    case "No":
      message +=
        "I respect it, and it may be better for your wallet to stay that way.";
      break;
    case "Sometimes":
      message +=
        "I too wish I could only use a few perfumes, but alas, the smelly water has taken hold of me.";
      break;
    default:
      message += "Unknown status :-(";
  }

  document.getElementById("output").innerHTML = message;
}
