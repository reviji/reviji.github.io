document.addEventListener("DOMContentLoaded", function() {
    // Like button 1
    let likeCount1 = 0;
    document.getElementById("btnLike1").addEventListener("click", function() {
        likeCount1++;
        document.getElementById("countLike1").value = likeCount1;
    });

    // Dislike button 1
    let dislikeCount1 = 0;
    document.getElementById("btnDislike1").addEventListener("click", function() {
        dislikeCount1++;
        document.getElementById("countDislike1").value = dislikeCount1;
    });

    // Like button 2
    let likeCount2 = 0;
    document.getElementById("btnLike2").addEventListener("click", function() {
        likeCount2++;
        document.getElementById("countLike2").value = likeCount2;
    });

    // Dislike button 2
    let dislikeCount2 = 0;
    document.getElementById("btnDislike2").addEventListener("click", function() {
        dislikeCount2++;
        document.getElementById("countDislike2").value = dislikeCount2;
    });

    // Comment section
    document.getElementById("submit").addEventListener("click", function() {
        const comment = document.getElementById("comment").value;
        const commentBox = document.getElementById("commentbox");
        if (comment.trim() !== "") {
            commentBox.value += comment + "\n";
            document.getElementById("comment").value = "";
        }
    });
});
