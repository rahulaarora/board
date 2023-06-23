import Board from "@/components/Board";
import Navbar from "@/components/Navbar";
import { useState, useRef } from "react";

export default function dashboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef();
  const board = useRef();

  function navBarToggleHandler(props) {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      nav.current.classList.remove("hidden");
      board.current.classList.add("hidden");
    } else {
      nav.current.classList.add("hidden");
      board.current.classList.remove("hidden");
    }
  }

  return (
    <>
      <section className="p-5 xl:p-[40px] bg-[#f5f5f5] flex">
        <Navbar ref={nav} navBarToggleHandler={navBarToggleHandler} />
        <Board
          ref={board}
          navBarToggleHandler={navBarToggleHandler}
          data={props.data}
        />
      </section>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch("https://fakerapi.it/api/v1/products?_quantity=4");
  const data = await res.json();

  data.data.forEach((element) => {
    element.price = Math.abs(element.price / 100000);
    element.name = element.name.split(" ").slice(0, 2).join(" ");
    element.id = Math.abs(element.id + element.price - 100);
  });

  return {
    props: {
      data: data.data,
    },
  };
}
