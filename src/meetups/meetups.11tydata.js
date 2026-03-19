module.exports = {
  layout: "layouts/meetup.njk",
  permalink: (data) => `/meetups/${data.meetupId}/index.html`,
}
