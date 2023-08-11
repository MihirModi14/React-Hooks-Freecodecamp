import React, { useEffect, useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const ActionType = {
  ADD: "ADD",
  NO_VALUE: "NO_VALUE",
  CLOSE_MODAL: "CLOSE_MODAL",
  REMOVE_PERSON: "REMOVE_PERSON",
};

const defaultState = {
  people: data,
  showModal: false,
  modalContent: "",
};

const Index = () => {
  const reducer = (state, action) => {
    if (action.type === ActionType.ADD) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name: action.name,
      };
      return {
        ...state,
        people: [newPerson, ...state.people],
        showModal: true,
        modalContent: `${action.name} Added!!!`,
      };
    }
    if (action.type === ActionType.NO_VALUE) {
      return {
        ...state,
        people: [...state.people],
        showModal: true,
        modalContent: `Please Enter Name`,
      };
    }
    if (action.type === ActionType.CLOSE_MODAL) {
      return {
        ...state,
        showModal: false,
      };
    }
    if (action.type === ActionType.REMOVE_PERSON) {
      const newPeople = state.people.filter(
        (person) => person.id !== action.personId
      );
      return {
        ...state,
        people: newPeople,
        showModal: true,
        modalContent: `Person removed`,
      };
    }
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    console.log("useEffect Called!!!");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: ActionType.ADD, name: name });
      setName("");
    } else {
      dispatch({ type: ActionType.NO_VALUE });
    }
  };

  const closeModal = () => {
    dispatch({ type: ActionType.CLOSE_MODAL });
  };
  return (
    <>
      {state.showModal && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" className="btn">
          add person
        </button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button
                onClick={() => {
                  dispatch({
                    type: ActionType.REMOVE_PERSON,
                    personId: person.id,
                  });
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
