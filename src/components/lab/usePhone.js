import { useEffect, useState } from "react";

const usePhone = () => {
  const [phone, setPhone] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 809px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 809px)");
    const onChange = (e) => setPhone(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return phone;
};

export default usePhone;
