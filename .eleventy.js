/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("css");
  return {};
};
