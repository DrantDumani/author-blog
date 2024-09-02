import { useLocation } from "react-router-dom";
import { useState } from "react";
import PostView from "../../components/PostView/PostView";
import FormComponent from "../../components/Form/Form";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Button from "../../components/Button/Button";
import style from "./Post.module.css";

import { Editor } from "@tinymce/tinymce-react";

function Post({ post, submitHandler }) {
  const { state } = useLocation();
  const [editMode, setEditMode] = useState(state?.isEdit);

  const [title, setTitle] = useState(post.title || "");
  const [subTitle, setSubTitle] = useState(post.subTitle || "");
  const [content, setContent] = useState(post.content || "");
  const [isPublished, setIsPublished] = useState(post.published || false);
  const [tags, setTags] = useState(post?.tags?.map((tag) => tag.name) || []);
  const [err, setErr] = useState("");

  const toggleEditMode = () => setEditMode(!editMode);
  const editTitle = (e) => setTitle(e.target.value);
  const editSubTitle = (e) => setSubTitle(e.target.value);
  const editPublished = () => setIsPublished(!isPublished);
  const editTags = (e) => {
    const truncateSpaces = e.target.value.replace(/\s+/g, " ");
    const newTags = truncateSpaces.split(",");
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
    <div className={style.postWrapper}>
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

            <>
              <Editor
                apiKey="sbnr0d8awyes1h6ow0twlrblmv4ndt9xt44p30b1jnw8fv6l"
                value={content}
                onEditorChange={(newValue) => setContent(newValue)}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "codesample",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | image " +
                    "codesample bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </>

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
    </div>
  );
}

export default Post;
