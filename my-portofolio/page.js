const ghpages=require('gh-pages');
const pathname =`${__dirname}/build`;
const repoURL = "https://github.com/carola-niu/carola-niu.github.io.git";

ghpages.publish(
    pathname,
    {
        branch: "main",
        repo: repoURL,
    },
    (err) => {
        if (err) console.log("Error: ", err);
        else console.log("Published!");
    }
);