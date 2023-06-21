// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from "sweetalert2";

const gameId = "s0zzz40DTZXzyq8xizXP";

const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const createScore = async (user, score) => {
  const response = await fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, score }),
  });

  if (response.ok) {
    const res = await response.json();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: res.result,
      showConfirmButton: false,
      timer: 1500,
    });
    return res.result;
  } else {
    const error = await response.json();
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
    return null;
  }
};

const getScore = async () => {
  const response = await fetch(`${apiUrl}`);
  const jsonRes = await response.json();
  return jsonRes;
};

export { createScore, getScore };
