const fixtureId = "fixture";

export const getFixture = () => {
  let fixtureElement = document.getElementById(fixtureId);

  if (!fixtureElement) {
    fixtureElement = document.createElement("div");
    fixtureElement.setAttribute("id", fixtureId);
    fixtureElement.style.position = "absolute";
    fixtureElement.style.top = "-10000px";
    fixtureElement.style.left = "-10000px";
    fixtureElement.style.width = "10000px";
    fixtureElement.style.height = "10000px";
    document.body.append(fixtureElement);
  }

  return fixtureElement;
};

export const clearFixture = () => {
  const fixtureElement = getFixture();

  fixtureElement.innerHTML = "";
};
