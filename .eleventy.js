module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" })
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" })

  const getDateKey = (value) => {
    if (!value) {
      return null
    }

    if (value instanceof Date) {
      const year = value.getUTCFullYear()
      const month = String(value.getUTCMonth() + 1).padStart(2, "0")
      const day = String(value.getUTCDate()).padStart(2, "0")

      return `${year}-${month}-${day}`
    }

    return String(value)
  }

  const toDate = (value) => {
    const key = getDateKey(value)

    if (!key) {
      return null
    }

    return new Date(`${key}T00:00:00Z`)
  }

  eleventyConfig.addFilter("formatMeetupDate", (value) => {
    const date = toDate(value)

    if (!date || Number.isNaN(date.getTime())) {
      return ""
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(date)
  })

  eleventyConfig.addFilter("adjacentMeetups", (collection, currentUrl) => {
    const index = collection.findIndex((item) => item.url === currentUrl)

    if (index === -1) {
      return { newer: null, older: null }
    }

    return {
      newer: collection[index - 1] || null,
      older: collection[index + 1] || null,
    }
  })

  eleventyConfig.addCollection("meetups", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/meetups/*.md")
      .sort(
        (left, right) =>
          new Date(right.data.meetupDate) - new Date(left.data.meetupDate)
      )
  )

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  }
}
