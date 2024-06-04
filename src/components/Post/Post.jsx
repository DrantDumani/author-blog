import { useLocation } from "react-router-dom";
import { useState } from "react";
import PostView from "../../components/PostView/PostView";
import FormComponent from "../../components/Form/Form";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Button from "../../components/Button/Button";

function Post({ post, submitHandler }) {
  const { state } = useLocation();
  const [editMode, setEditMode] = useState(state?.isEdit);

  const [title, setTitle] = useState(post.title || "");
  const [subTitle, setSubTitle] = useState(post.subTitle || "");
  const [content, setContent] = useState(post.content || "");
  const [isPublished, setIsPublished] = useState(post.published || false);
  const [tags, setTags] = useState(post.tags || []);
  const [err, setErr] = useState("");

  const toggleEditMode = () => setEditMode(!editMode);
  const editTitle = (e) => setTitle(e.target.value);
  const editSubTitle = (e) => setSubTitle(e.target.value);
  const editContent = (e) => setContent(e.target.value);
  const editPublished = () => setIsPublished(!isPublished);
  const editTags = (e) => {
    const newTags = e.target.value.split(",");
    setTags(newTags);
  };

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      subTitle: subTitle,
      content: content,
      published: isPublished,
      tags: tags,
    };

    submitHandler(data, setErr);
    setEditMode(false);
  };

  return (
    <>
      {!editMode ? (
        <Button btnText="Edit" clickHandler={toggleEditMode} />
      ) : (
        <Button btnText="Preview" clickHandler={toggleEditMode} />
      )}
      {editMode ? (
        <div>
          <FormComponent submitHandler={submitData}>
            <InputWrapper
              label="Title:"
              value={title}
              handleInput={editTitle}
              isRequired={true}
              name="title"
            />
            <InputWrapper
              label="Sub title:"
              value={subTitle}
              handleInput={editSubTitle}
              isRequired={false}
              name="subTitle"
            />
            <InputWrapper
              label="Content: "
              name="content"
              handleInput={editContent}
              isRequired={true}
              value={content}
              type="textarea"
            />
            <InputWrapper
              label="Tags:"
              value={tags.join(",")}
              handleInput={editTags}
              isRequired={false}
              name="tags"
            />
            <InputWrapper
              label="Publish:"
              value={isPublished}
              handleInput={editPublished}
              name="published"
              type="checkbox"
            />
            <Button
              btnText={state?.newPost ? "Create Post" : "Save Changes"}
              type="submit"
            />
          </FormComponent>
          {err && <p>{err}</p>}
        </div>
      ) : (
        <PostView
          title={title}
          subTitle={subTitle}
          content={content}
          tags={tags}
          timestamp={post.timestamp}
          isPublished={isPublished}
          edited_at={post.edited_at}
        />
      )}
    </>
  );
}

export default Post;
