export function getJwtFromLS() {
  const jwt = localStorage.getItem("token");
  if (!jwt) return false;
  const payload = JSON.parse(window.atob(jwt.split(".")[1]));
  if (Date.now() > payload?.exp * 1000) {
    localStorage.removeItem("token");
    return false;
  } else return jwt;
}
