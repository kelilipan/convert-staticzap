import convert from "../src/index";

describe("convert-staticzap", () => {
  it("return null at not valid url", () => {
    const url = "https://twitter.com/wkwkwkkwwk";
    const expectedResult = null;
    const result = convert(url);
    expect(result).toEqual(expectedResult);
  });

  it("return null if url not defined", () => {
    expect(convert()).toEqual(null);
  });

  describe("github files", () => {
    it("raw.githubusercontent.com, should return correct CDN url", () => {
      const url =
        "https://raw.githubusercontent.com/svspicious/wisesa.dev/main/README.md";
      const expectedResult =
        "https://cdn.statically.io/gh/svspicious/wisesa.dev/main/README.md";
      const result = convert(url);
      expect(result).toEqual(expectedResult);
    });

    it("raw.githubusercontent.com, should return correct CDN url", () => {
      const url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
      const expectedResult =
        "https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
      const result = convert(url);
      expect(result).toEqual(expectedResult);
    });

    it("github.com blob, should return correct CDN url", () => {
      const url =
        "https://github.com/svspicious/wisesa.dev/blob/main/public/dino.gif";
      const expectedResult =
        "https://cdn.statically.io/gh/svspicious/wisesa.dev/main/public/dino.gif";
      const result = convert(url);
      expect(result).toEqual(expectedResult);
    });

    it("github.com raw, should return correct CDN url", () => {
      const url =
        "https://github.com/svspicious/wisesa.dev/raw/main/public/preview.png";
      const expectedResult =
        "https://cdn.statically.io/gh/svspicious/wisesa.dev/main/public/preview.png";
      const result = convert(url);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("gitlab url", () => {
    it("convert blob url", () => {
      const url =
        "https://gitlab.com/gitlab-org/gitlab-svgs/-/blob/main/illustrations/autodevops.svg";
      const expected =
        "https://cdn.statically.io/gl/gitlab-org/gitlab-svgs/main/illustrations/autodevops.svg";
      const result = convert(url);
      expect(result).toEqual(expected);
    });
    it("convert raw url", () => {
      const url =
        "https://gitlab.com/gitlab-org/gitlab-svgs/-/raw/main/illustrations/autodevops.svg";
      const expected =
        "https://cdn.statically.io/gl/gitlab-org/gitlab-svgs/main/illustrations/autodevops.svg";
      const result = convert(url);
      expect(result).toEqual(expected);
    });
  });
});
