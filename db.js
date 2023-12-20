const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

const url = `mongodb+srv://strizhovvladislav96:Vlad199621480@cluster0.wfcoqtn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url);

BlogPost.find({}).then(async (posts) => {
  const post = await BlogPost.deleteOne({
    _id: "6576b487efb7f1bcab72ec2a",
  });
  console.log(post);
  console.log(posts);
});
