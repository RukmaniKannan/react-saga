import React, { useEffect } from "react";
import "./SagaStyleSheet.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { CreateRequestAction } from "../Redux/Action/CreateRegAction";
import { CreateUpdateAction } from "../Redux/Action/CreateUpdateAction";
const UpDataSaga = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userUpdateData = location.state?.user;
  console.log("userUpdateData", userUpdateData);
  const initialValues = {
    id: "",
    userName: "",
    mobileNo: "",
    language: "",
    gender: [],
  };
  // const values = initialValues;
  useEffect(() => {
    if (userUpdateData) {
      formik.setValues({
        id: userUpdateData.id,
        userName: userUpdateData.userName,
        mobileNo: userUpdateData.mobileNo,
        language: userUpdateData.language,
        gender: userUpdateData.gender,
      });
    }
  }, [userUpdateData]);

  const validationSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    mobileNo: yup.string().required("Required"),
    language: yup.string().required("Required"),
    gender: yup.array().min(1, "Required"),
  });

  const onSubmit = (values) => {
    console.log(values, "updatevalue");
    dispatch(CreateUpdateAction({ id: userUpdateData.id, values }));
    // dispatch(CreateUpdateAction({ ...values, id: userUpdateData.id }));
    navigate("/read");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    // enableReinitialize: true,
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
            <p style={{ color: "red" }}>{formik.errors.userName}</p>
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
            checked={formik.values.gender.includes("Male")}
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
            checked={formik.values.gender.includes("Female")}
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
            checked={formik.values.gender.includes("others")}
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
            value={formik.values.language}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Choose</option>
            <option value="Tamil">Tamil</option>
            <option value="English">English</option>
            <option value="Computer">Computer</option>
            <option value="Math">Math</option>
          </select>
          {formik.errors.language && formik.touched.language ? (
            <p style={{ color: "red" }}>{formik.errors.language}</p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpDataSaga;
