import React, { useContext, useEffect } from "react";
import "./SagaStyleSheet.css";
import * as yup from "yup";
import { useFormik } from "formik";
// import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { CreateRequestAction } from "../Redux/Action/CreateRegAction";
import { useDispatch, useSelector } from "react-redux";


const CreateSaga = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.createFetch);
  const userData = response?.data;
  console.log("response", userData);
  // const {setUserData} = useContext(userContext)
  const initialValues = {
    userName: "",
    mobileNo: "",
    language: "",
    gender: [],
  };
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    mobileNo: yup.string().required("Required"),
    language: yup.string().required("Required"),
    gender: yup.array().min(1, "Required"),
  });

  const onSubmit = (values) => {
    dispatch(CreateRequestAction(values));
  
    navigate("/read");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  
  return (
    <div
      className="create-saga mt-5"
      style={{ marginTop: "20px", textAlign: "center" }}
    >
      <div>
        <h1 className="word pt-4">Crud Operation</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="userName">userName:</label>
          <input
            type="text"
            className="form-control-sm mt-2 mx-3"
            id="userName"
            name="userName"
            placeholder="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.userName && formik.touched.userName ? (
            <p style={{ color: "red" }}>{formik.errors.userName} </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="MobileNo">MobileNo:</label>
          <input
            type="number"
            className="form-control-sm mt-3 mx-3"
            id="mobileNo"
            name="mobileNo"
            placeholder="mobileNo"
            value={formik.values.mobileNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.mobileNo && formik.touched.mobileNo ? (
            <p style={{ color: "red" }}>{formik.errors.mobileNo}</p>
          ) : null}
        </div>
        <div style={{ marginRight: "160px" }} className="mx-2">
          <label htmlFor="Gender" className="mx-2">
            Gender:
          </label>

          <input
            type="checkbox"
            className="mt-3 mx-1"
            id="gender"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="male">Male</label>

          <input
            type="checkbox"
            className="mx-1"
            id="gender"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="female">Female</label>

          <input
            type="checkbox"
            className="mx-1"
            id="gender"
            name="gender"
            value="others"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="others">others</label>

          {formik.errors.gender && formik.touched.gender ? (
            <p style={{ color: "red" }}>{formik.errors.gender}</p>
          ) : null}
        </div>
        <div style={{ marginRight: "90px" }}>
          <label htmlFor="seleted">Seleted:</label>
          <select
            id="language"
            name="language"
            className="mt-3 mx-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option>Choose</option>
            <option value="Tamil">Tamil</option>
            <option value="English">English</option>
            <option value="Computer">Computer</option>
            <option value="Math">Math</option>
          </select>
          {formik.errors.language && formik.touched.language ? (
            <p style={{ color: "red" }}>{formik.errors.language}</p>
          ) : null}
        </div>

        <button type="submit" className=" btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSaga;
