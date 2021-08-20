// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oziCwM22VswxiFyZsu5zc9
// Component: kKnVskbtalV
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: WZRh3ALaka92/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2UleRr5sZkQO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: oziCwM22VswxiFyZsu5zc9/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: kKnVskbtalV/css

import LocationArrowIcon from "./icons/PlasmicIcon__LocationArrow"; // plasmic-import: _mW7XKpzffRQ/icon
import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: 7fO6C5daaTb6/icon
import InstagramIcon from "./icons/PlasmicIcon__Instagram"; // plasmic-import: iQMmP9T5s-_h/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: cFjT7Um1R0nY/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___2XRQl)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__aYhc1)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__wsC6
            )}
          >
            {"Information"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__p4NnQ)}
          >
            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ugJLe
              )}
              href={"#" as const}
            >
              {"About Us"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__deMuq
              )}
              href={"#" as const}
            >
              {"Contact Us"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__vYJzW
              )}
              href={"#" as const}
            >
              {"News"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__jGpsL
              )}
              href={"#" as const}
            >
              {"Store"}
            </a>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__zun3O)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__bXydm
            )}
          >
            {"Collections"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__b6Ppk)}
          >
            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__idFBx
              )}
              href={"#" as const}
            >
              {"Wooden Chair"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__nbDW
              )}
              href={"#" as const}
            >
              {"Royal Cloth Sofa"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___0RTGa
              )}
              href={"#" as const}
            >
              {"Accent Chair"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___97Xi1
              )}
              href={"#" as const}
            >
              {"Bed"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__xrME
              )}
              href={"#" as const}
            >
              {"Hanging Lamp"}
            </a>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__acVb1)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___6JbQ7
            )}
          >
            {"My Accounts"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__ykoNk)}
          >
            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__gGNuj
              )}
              href={"#" as const}
            >
              {"My Account"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__fB02R
              )}
              href={"#" as const}
            >
              {"Wishlist"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__abh61
              )}
              href={"#" as const}
            >
              {"Community"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__xDaHd
              )}
              href={"#" as const}
            >
              {"Order History"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__wntln
              )}
              href={"#" as const}
            >
              {"My Cart"}
            </a>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__qLuGg)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__iXx3G
            )}
          >
            {"Newsletter"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__wRh3O
            )}
          >
            {"Subscribe to get latest news, updates, and information"}
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__haHy)}>
            <input
              data-plasmic-name={"textbox"}
              data-plasmic-override={overrides.textbox}
              className={classNames(defaultcss.input, sty.textbox)}
              placeholder={"Enter Email Here..." as const}
              size={1 as const}
              type={"text" as const}
              value={"" as const}
            />

            <button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames(defaultcss.button, sty.button)}
            >
              <LocationArrowIcon
                className={classNames(defaultcss.all, sty.svg___8HFfz)}
                role={"img"}
              />
            </button>
          </div>
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__sYkgF)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__shylf)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__wwYxN)}
            icon={
              <FacebookIcon
                className={classNames(defaultcss.all, sty.svg__aK95E)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__nmUT)}
            icon={
              <InstagramIcon
                className={classNames(defaultcss.all, sty.svg__es1Ti)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__lv8Ya)}
            icon={
              <LinkedinIcon
                className={classNames(defaultcss.all, sty.svg__fhBkQ)}
                role={"img"}
              />
            }
          />
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.freeBox___24BVd)}>
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__frEcf
            )}
          >
            {"© Copyright. "}
          </div>

          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__bDwI0
            )}
            href={"https://www.plasmic.app/" as const}
          >
            {"Made by Plasmic. "}
          </a>

          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__xnoO7
            )}
            href={"https://www.themesine.com/" as const}
          >
            {"Inspired by Themesine."}
          </a>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
