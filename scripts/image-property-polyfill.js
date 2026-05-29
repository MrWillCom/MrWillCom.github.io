hexo.extend.filter.register('before_post_render', data => {
  if (typeof data.cover_image && !data.image) {
    data.image = data.cover_image
  }
  return data
})
