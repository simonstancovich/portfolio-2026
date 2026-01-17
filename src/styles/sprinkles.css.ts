import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const spaceProperties = defineProperties({
  properties: {
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    gap: vars.space,
  },
});

const colorProperties = defineProperties({
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
  },
});

const borderRadiusProperties = defineProperties({
  properties: {
    borderRadius: vars.radius,
  },
});

const typographyProperties = defineProperties({
  properties: {
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    fontFamily: vars.font,
  },
});

export const sprinkles = createSprinkles(
  spaceProperties,
  colorProperties,
  borderRadiusProperties,
  typographyProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
