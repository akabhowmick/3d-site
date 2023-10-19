import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { storage } from "./ImageFirebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./ImageUpload.css";

const errorStyle = {
  color: "red",
  fontSize: "12px",
  marginBottom: "10px",
  marginTop: "-8px",
};

const initial = {
  images: {
    data: [],
    valid: false,
    errorMessage: "",
  },
  name: {
    data: "",
    valid: false,
    errorMessage: "",
  },
  message: {
    data: "",
    valid: false,
    errorMessage: "",
  },
  email: { data: "", valid: false, errorMessage: "" },
};

// eslint-disable-next-line react/prop-types
export const ImageUploader = () => {
  const [formValues, setFormValues] = useState(initial);

  let submitBtnVariant;
  let submitBtnText;
  let submitBtnColor;

  if (
    formValues.images.valid &&
    formValues.name.valid &&
    formValues.message.valid &&
    formValues.email.valid
  ) {
    submitBtnVariant = "contained";
    submitBtnText = "Submit to our designers!";
    submitBtnColor = "success";
  } else {
    submitBtnVariant = "outlined";
    submitBtnText = "Complete the form to submit!";
    submitBtnColor = "error";
  }

  const messageBodyValidation = (desc) => {
    if (!(desc.length > 0)) {
      setFormValues({
        ...formValues,
        message: {
          data: desc,
          valid: false,
          errorMessage: "Invalid: enter a description",
        },
      });
    } else {
      setFormValues({
        ...formValues,
        message: {
          data: desc,
          valid: true,
          errorMessage: "",
        },
      });
    }
  };

  const nameValidation = (name) => {
    if (!(name.length > 0)) {
      setFormValues({
        ...formValues,
        name: {
          data: name,
          valid: false,
          errorMessage: "Invalid: enter a name",
        },
      });
    } else {
      setFormValues({
        ...formValues,
        name: { data: name, valid: true, errorMessage: "" },
      });
    }
  };

  const emailValidation = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setFormValues({
        ...formValues,
        email: {
          data: email,
          valid: false,
          errorMessage: "Invalid email address",
        },
      });
    } else {
      setFormValues({
        ...formValues,
        email: { data: email, valid: true, errorMessage: "" },
      });
    }
  };

  const uploadImageToFirebase = (file) => {
    if (file) {
      const imageRef = ref(
        storage,
        `images/${
          "Client Name: " +
          formValues.name.data +
          "; Client Message: " +
          formValues.message.data +
          "; Client Email: " +
          formValues.email.data
        }/${file.name + v4()}`
      );
      uploadBytes(imageRef, file);
    }
  };

  const imagesValidation = (e) => {
    let imageArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      const imagesURLs = URL.createObjectURL(newImage);
      newImage["id"] = Math.random();
      newImage["displayImage"] = imagesURLs;
      imageArray.push(newImage);
    }
    setFormValues({
      ...formValues,
      images: {
        data: imageArray,
        valid: true,
        errorMessage: "",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.images.valid &&
      formValues.name.valid &&
      formValues.message.valid &&
      formValues.email.valid
    ) {
      formValues.images.data.forEach((image) => {
        uploadImageToFirebase(image);
      });
      setFormValues(initial);
    }
  };

  return (
    <div
      className="container upload-image-container top-space"
      style={{ minHeight: "66vh" }}
    >
      <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)}>
        <Typography
          id="modal-modal-title"
          style={{ color: "black" }}
          variant="h6"
          component="h2"
        >
          Add Reference Pictures for your 3D product!
        </Typography>
        {/* name */}
        <TextField
          value={formValues.name.data}
          margin="normal"
          required
          fullWidth
          name="client-name"
          label="Client Name"
          type="text"
          id="client-name"
          autoComplete="Client Name"
          autoFocus
          onChange={(e) => {
            nameValidation(e.target.value);
          }}
        />
        {!formValues.name.valid && (
          <Typography sx={errorStyle} variant="h6" component="h6">
            {formValues.name.errorMessage}
          </Typography>
        )}
        {/* email */}
        <TextField
          value={formValues.email.data}
          margin="normal"
          required
          fullWidth
          name="client-email"
          label="Client Email"
          type="text"
          id="client-email"
          autoComplete="Client Email"
          autoFocus
          onChange={(e) => {
            emailValidation(e.target.value);
          }}
        />
        {!formValues.email.valid && (
          <Typography sx={errorStyle} variant="h6" component="h6">
            {formValues.email.errorMessage}
          </Typography>
        )}
        <TextField
          value={formValues.message.data}
          margin="normal"
          required
          fullWidth
          name="client-message"
          label="Client Message"
          type="text"
          id="client-message"
          autoComplete="Client Message"
          autoFocus
          onChange={(e) => {
            messageBodyValidation(e.target.value);
          }}
        />
        {!formValues.message.valid && (
          <Typography sx={errorStyle} variant="h6" component="h6">
            {formValues.message.errorMessage}
          </Typography>
        )}
        <div className="upload-file-div">
          <Button
            variant="contained"
            component="label"
            sx={{ bgColor: "var(--blue-background)" }}
          >
            Upload File
            <input
              type="file"
              multiple
              hidden
              onChange={(e) => imagesValidation(e)}
            />
          </Button>
          {formValues.images.data?.map((image) => {
            return (
              <img
                key={image.id}
                className="upload-img"
                src={image.displayImage}
              />
            );
          })}

          {!formValues.images.valid && (
            <Typography sx={errorStyle} variant="h6" component="h6">
              {formValues.images.errorMessage}
            </Typography>
          )}
        </div>

        <Button
          type="submit"
          fullWidth
          variant={submitBtnVariant}
          color={submitBtnColor}
          sx={{ mt: 3, mb: 2 }}
        >
          {submitBtnText}
        </Button>
      </Box>
    </div>
  );
};
