export async function unreg() {
  if (!window.navigator || !navigator.serviceWorker) {
    return null;
  }
  const registrations = await navigator.serviceWorker.getRegistrations();
  return Promise.all(
    registrations.map((registration) => registration.unregister())
  );
}

export function cleanUp() {
  cy.clearAllCookies();
}