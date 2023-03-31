import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import FormProgress from "../components/FormProgress";
import Header from "../components/Header";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
  Step11,
} from "../components/memberFormStep";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { clearStepMemberData } from "../store";

const AddMemberPage = ({ type }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState(null);
  const { household_id: params_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    $("html,body").scrollTop(0);
    setErrors(null);
  }, []);

  const navigateBack = () => {
    navigate(`/members/${params_id}`);
  };

  const clearStepData = () => {
    dispatch(clearStepMemberData(`step${step}`));
    setErrors(null);
  };

  const clearAllData = () => {};

  const handleShowError = (errorObj) => {
    const errArr = [];
    for (const key in errorObj) {
      if (errorObj[key].fields.length > 0) {
        errArr.push({
          des: errorObj[key].name,
          field: errorObj[key].fields.join(", "),
        });
      }
    }

    setErrors(errArr);
  };

  const renderedErrors = () => {
    return (
      <Card error>
        <div className="text-red-600">
          {errors.map((error) => {
            return (
              <div key={error.field} className="my-2">
                <BiErrorCircle className="mr-2 inline-block text-xl pb-1" />
                {error.des} ({error.field.toUpperCase()})
              </div>
            );
          })}
        </div>
      </Card>
    );
  };

  const renderedStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            onNext={(step) => setStep(step)}
            onShowError={handleShowError}
          />
        );
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
      case 8:
        return <Step8 />;
      case 9:
        return <Step9 />;
      case 10:
        return <Step10 />;
      case 11:
        return <Step11 />;
      default:
        break;
    }
  };

  return (
    <>
      <Header
        title={
          type === "add"
            ? "เพิ่มสมาชิกในครัวเรือน"
            : "แก้ไขครัวเรือนในครัวเรือน"
        }
      >
        <div className="flex flex-row">
          <Button danger onClick={clearStepData}>
            ล้างข้อมูลในขั้นนี้
          </Button>
          <Button danger onClick={clearAllData}>
            ล้างข้อมูลทั้งหมด
          </Button>
          <Button secondary onClick={navigateBack}>
            <IoChevronBack className="mr-1" />
            กลับ
          </Button>
        </div>
      </Header>
      <FormProgress
        total={11}
        current={step}
        onProgressClick={(i) => setStep(i)}
      />
      {errors && renderedErrors()}
      <Card className="form-container mt-5">{renderedStep()}</Card>
    </>
  );
};

export default AddMemberPage;