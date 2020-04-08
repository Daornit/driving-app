const DataLoader = require('dataloader');

const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

// const postLoader = new DataLoader(postIds => {
//   return postsHandle(postIds);
// });

// const singlePostLoader = new DataLoader(postIds => {
//   return Post.find({ _id: { $in: postIds } });
// });

// const userLoader = new DataLoader(userIds => {
//   return User.find({ _id: { $in: userIds } });
// });

// const commentLoader = new DataLoader(commentIds => {
//   return commentsHandle(commentIds);
// })

// const categoryLoader = new DataLoader(categoryIds => {
//   return Category.find({ _id: { $in: categoryIds } });
// });

// const commentsHandle = async commentIds => {
//   try {
//     const comments = await Comment.find({ _id: { $in: commentIds } }).sort({createdDate: -1});
    
//     return comments.map(comment => {
//       return transformComment(comment);
//     });
//   } catch (err) {
//     throw err;
//   }
// }

// const postsHandle = async postIds => {
//   try {
//     const posts = await Post.find({ _id: { $in: postIds } });
//     posts.sort((a, b) => {
//       return (
//         postIds.indexOf(a._id.toString()) - postIds.indexOf(b._id.toString())
//       );
//     });
//     return posts.map(post => {
//       return transformPost(post);
//     });
//   } catch (err) {
//     throw err;
//   }
// };

// const singlePost = async postId => {
//   try {
//     if(!postId) return null;

//     const post = await singlePostLoader.load(postId.toString());
//     return transformPost(post);
//   } catch (err) {
//     throw err;
//   }
// };

// const user = async userId => {
//   try {
//     if(!userId) return null;
//     const user = await userLoader.load(userId.toString());
//     return transformUser(user);
//   } catch (err) {
//     throw err;1
//   }
// };

// const singleCategory = async categoryId => {
//   try {
//     if(!categoryId) return null;

//     const singleCategory = await categoryLoader.load(categoryId.toString());
//     return transformCategory(singleCategory);

//   } catch (err) {
//     throw err;
//   }
// };

const transformUser = user => {
  return {
    ...user._doc,
    _id: user.id,
    hash: null,
    salt: null,
  }
}

// const transformCategoryForPost = async postId => {
//   const categoryIds = await PostAndCategory.distinct('category', {post: postId});
//   const categories = await categoryLoader.loadMany(categoryIds.map(id => id.toString()));
//   return categories.map(category => {
//     return {
//       ...transformCategory(category)
//     }
//   })
// }

// const transformPost = post => {
//   return {
//     ...post._doc,
//     _id: post.id,
//     createdDate: dateToString(post._doc.createdDate),
//     updatedDate: dateToString(post._doc.updatedDate),
//     author: user.bind(this, post.author),
//     comments: () => commentLoader.loadMany(post.comments),
//     categories: transformCategoryForPost.bind(this, post.id),
//     lastUpdatedUser: user.bind(this, post.lastUpdatedUser),
//   };
// };

// const transformTrendPosts = async categoryId => {
//   const postAndCategories = await PostAndCategory.find({category: categoryId, type: 'TREND'}).populate('post');
//   return postAndCategories.map(postAndCategory => {
//     return {
//       ...transformPost(postAndCategory.post)
//     }
//   })
// }

// const transformPopularPosts = async categoryId => {
//   const postAndCategories = await PostAndCategory.find({category: categoryId, type: 'POPULAR'}).populate('post');
//   return postAndCategories.map(postAndCategory => {
//     return {
//       ...transformPost(postAndCategory.post)
//     }
//   })
// }

// const transformRatedPosts = async categoryId => {
//   const postAndCategories = await PostAndCategory.find({category: categoryId, type: 'RATED'}).populate('post');
//   return postAndCategories.map(postAndCategory => {
//     return {
//       ...transformPost(postAndCategory.post)
//     }
//   })
// }

// const transformRegularPosts = async categoryId => {
//   const postAndCategories = await PostAndCategory.find({category: categoryId, type: 'REGULAR'}).populate('post');
//   return postAndCategories.map(postAndCategory => {
//     return {
//       ...transformPost(postAndCategory.post)
//     }
//   })
// }

// const transformCategory = category => {
//   return {
//     ...category._doc,
//     _id: category.id,
//     trendPosts: transformTrendPosts.bind(this, category.id),
//     popularPosts: transformPopularPosts.bind(this, category.id),
//     ratedPosts: transformRatedPosts.bind(this, category.id),
//     posts: transformRegularPosts.bind(this, category.id),
//     parentCategory: singleCategory.bind(this, category._doc.parentCategory),
//   }
// }

// const transformPostAndCategory = postAndCategory => {
//   return {
//     ...postAndCategory._doc,
//     category: singleCategory.bind(this, postAndCategory._doc.category),
//     post: () => postLoader.load(postAndCategory._doc.post),
//   }
// }

// const transformNotification = notification => {
//   return {
//     ...notification._doc,
//     _id: notification.id,
//     sendBy: user.bind(this, notification._doc.sendBy),
//     sendTo: user.bind(this, notification._doc.sendTo),
//     createdDate: dateToString(notification._doc.createdDate),
//   }
// }

// const transformComment = comment => {
//   return {
//     ...comment._doc,
//     _id: comment.id,
//     post: singlePost.bind(this, comment.post),
//     createdDate: dateToString(comment._doc.createdDate),
//   }
// }
exports.transformUser = transformUser;
// exports.transformPost = transformPost;
// exports.transformComment = transformComment;
// exports.transformCategory = transformCategory;
// exports.transformNotification = transformNotification;
// exports.transformPostAndCategory = transformPostAndCategory;
