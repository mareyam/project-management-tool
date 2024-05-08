import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Text, Flex, Grid, GridItem, VStack, Checkbox } from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUserStore } from "@/zustand-store/user";
import { auth } from "@/utils/config";
import { InputField } from "@/components/common";
import RoleSelection from "../RoleSelection";
import AuthCard from "../AuthCard";
import AuthButton from "../AuthButton";
import GoogleAuthButton from "../GoogleAuthButton";

const SignInCard = () => {
  const [error, setError] = useState<string>("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const { role, setRole, email, setEmail, password, setPassword } =
    useUserStore();

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(email, password);
      if (user) {
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        setError("proceeding to team");
        router.push("/dashboard");
      } else {
        setError("Sign-in failed: Invalid email or password");
      }
    } catch (error) {
      setError("Error signing in");
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
            Log in to you account <br />
            <Text as="span" fontSize="12" fontWeight="100">
              dont have an account? sign up
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

          <Flex w="xs" fontSize="12" justifyContent="space-between">
            <Checkbox>
              <Text fontSize="12">remember me</Text>
            </Checkbox>

            <Text>forgot password</Text>
          </Flex>
          <AuthButton handleAction={handleSignIn} />
          <GoogleAuthButton title="Sign in with Google" />
          <RoleSelection role={role} setRole={setRole} />

          <Text color="red" fontSize="20">
            {error}
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default SignInCard;
