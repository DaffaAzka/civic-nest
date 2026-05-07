import InputField from "@/components/custom/input-field";
import LoadingButton from "@/components/custom/loading-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router";

export default function RegisterForm() {
  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <Card className="min-w-xl">
        <CardHeader>
          <CardTitle>Register Account</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Form method="post" className="flex flex-col gap-4">
            <InputField name="name" label="Name" />
            <InputField name="email" label="Email" type="email" />
            <div className="flex flex-row gap-4">
              <InputField name="password" label="Password" type="password" />
              <InputField
                name="retry_password"
                label="Retry password"
                type="password"
              />
            </div>
            <LoadingButton
              text="Submit"
              loading={navigation.state === "submitting"}
            />
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
