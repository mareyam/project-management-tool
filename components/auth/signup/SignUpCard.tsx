"use client";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  VStack,
  Button,
  Input,
  Checkbox,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import axios from "axios";
import { auth } from "@/utils/config";
import { useUserStore } from "@/zustand-store/user";
import { useRouter } from "next/router";
import AuthCard from "../AuthCard";
import { InputField } from "@/components/common";
import AuthButton from "../AuthButton";
import GoogleAuthButton from "../GoogleAuthButton";
import RoleSelection from "../RoleSelection";

const SignUpCard = () => {
  const [error, setError] = useState<any>("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();
  const { role, email, password, setEmail, setPassword } = useUserStore();

  const handleSignUp = async () => {
    const res = await createUserWithEmailAndPassword(email, password);

    try {
      axios
        .post(`/api/set_user`, { email, role })
        .then((res) => {
          console.log("response is" + res);
        })
        .catch((err) => console.log("err is" + err));
      setError("sign in successful");
      router.push("/signin");
      console.log(email + " " + role);
    } catch (e) {
      setError("Sign-in failed: Invalid email or password");
      console.error("error is" + e);
    }
  };

  return (
    <Grid
      justifyContent="center"
      display="flex"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(8, 1fr)"
      h="95dvh"
      w="100dvw"
    >
      <AuthCard />
      <GridItem w="lg" colSpan={2} bg="white" boxShadow="lg">
        <VStack w="full" h="full" justifyContent="center">
          <Text fontSize="20" fontWeight="700">
            Create new account <br />
            <Text as="span" fontSize="12" fontWeight="100">
              have an account? sign in
            </Text>
          </Text>
          <InputField
            placeholder="email"
            label="email"
            field={email}
            setField={setEmail}
          />
          <InputField
            label="password"
            placeholder="password"
            field={password}
            setField={setPassword}
          />

          <Heading bg="red">{error}</Heading>
          <Flex w="xs" fontSize="12" justifyContent="space-between">
            <Checkbox>
              <Text fontSize="12">remember me</Text>
            </Checkbox>
            <Text>forgot password</Text>
          </Flex>
          <AuthButton handleAction={handleSignUp} />
          <GoogleAuthButton title="Sign up with Google" />
          <RoleSelection />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default SignUpCard;
