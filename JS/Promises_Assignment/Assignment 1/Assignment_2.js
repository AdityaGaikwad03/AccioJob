/* 
📝 Assignment 2
Task
Simulate a 3-step onboarding flow:
createAccount() → resolves with a userId
fetchUserProfile(userId) → resolves with user profile object
showWelcomeScreen(profile) → resolves with "Welcome <name>!"
Requirements:
Each function must return a Promise with a setTimeout to simulate delay.
Chain them using .then() (no nesting).
Add .catch() at the end to catch any failure.
Add .finally() for cleanup: "Onboarding flow complete".
Expected output flow (in order):
"Account created"
"Profile loaded for "
"Welcome !"
"Onboarding flow complete" */
function createAccount() {
  return new Promise((resolve, reject) => {
    console.log("Creating account...");
    setTimeout(() => {
      const success = true; // change to false to test error flow
      if (success) {
        resolve({ userId: 101 });
      } else {
        reject("Account creation failed ❌");
      }
    }, 1000);
  });
}

function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    console.log("Fetching profile for user:", userId);
    setTimeout(() => {
      resolve({ id: userId, name: "Aarav", plan: "Pro" });
    }, 1000);
  });
}

function showWelcomeScreen(profile) {
  return new Promise((resolve) => {
    console.log("Rendering welcome screen...");
    setTimeout(() => {
      resolve(`Welcome ${profile.name}! 🎉`);
    }, 1000);
  });
}

// Chaining them
createAccount()
  .then((user) => {
    console.log("1️⃣ Account created:", user);
    return fetchUserProfile(user.userId);
  })
  .then((profile) => {
    console.log("2️⃣ Profile loaded:", profile);
    return showWelcomeScreen(profile);
  })
  .then((welcomeMsg) => {
    console.log("3️⃣", welcomeMsg);
  })
  .catch((err) => {
    console.error("ERROR:", err);
  })
  .finally(() => {
    console.log("Onboarding flow complete ✅");
  });
