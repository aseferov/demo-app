import React, { useMemo } from "react";
import { Component1, Component2, Component3, Component4 } from "./components";
import { Page } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import UserService from "../../services/UserService";
import { update } from "./reducer/mainFormSlice";

const defaultFormComponents = [Component1, Component2, Component3, Component4];

const lendersFormComponents: { [key: string]: React.FC[] } = {
  lender1: [Component1, Component2, Component4],
  lender2: [Component1, Component2, Component3],
};

const Main = () => {
  const formData = useAppSelector((state) => state.mainForm);
  const dispatch = useAppDispatch();

  const params = useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
  }, []);

  const formComponents =
    (params.parameter && lendersFormComponents[params.parameter]) ||
    defaultFormComponents;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UserService.save(formData).then((response) => {
      dispatch(update(response));
    });
  };

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-2">
          <button className="border-gray-300 border py-2 px-3 rounded bg-gray-300">
            Submit
          </button>
        </div>
        {formComponents.map((Form, key) => (
          <div
            className="mb-5 py-5 rounded-2xl border border-gray-300"
            key={key}
          >
            <p className="px-5 text-lg mb-5">{Form.name}</p>
            <Form />
          </div>
        ))}
      </form>
    </Page>
  );
};

export default Main;
