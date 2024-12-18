"use client";
import { login } from "@/actions/auth";
import { Chrome } from "lucide-react";
import React from "react";

const LoginGoogle = () => {
  return (
    <div
      className="btn btn-success btn-outline uppercase btn-primary"
      onClick={() => {
        login("google");
      }}
    >
     <Chrome />Login Google
    </div>
  );
};

export default LoginGoogle;
