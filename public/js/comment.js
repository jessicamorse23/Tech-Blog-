// might have to enter blog id to get the comment on the right post. not sure

const newCommentFormHandler = async function (event) {
  event.preventDefault();

  const comment_text = document.querySelector('#new-comment-form').value.trim();

  if (comment_text) {
    await fetch ('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_description ,
      }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    document.location.reload();
  }
};

document
.querySelector('#new-comment-form')
.addEventListener('submit', commentFormHandler);
