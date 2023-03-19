import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types";
import React, { VFC } from "react";
import type { Route } from "src/_types/route";

const { Navigator, Screen } = createDrawerNavigator();

interface DrawerNavProps {
  /**
   * the routes of the drawer navigation
   */
  routes: Route[];
  /**
   * the initial route name of the drawer navigation
   */
  initialRouteName?: string;
  /**
   * the header of the drawer navigation
   */
  header?: (props: DrawerHeaderProps) => React.ReactNode;
  /**
   * the drawer content of the drawer navigation
   */
  drawerContent?: (props: DrawerContentComponentProps<DrawerContentOptions>) => React.ReactNode;
}

/**
 * DrawerNav component used to create a drawer navigation
 * @example
 * <DrawerNav
 *    routes={routes}
 *    initialRouteName="contribute"
 *    header={(props) => (
 *      <AppBar
 *        title={routes.find(({ name }) => name === props.scene.route.name)?.title || ""}
 *        openDrawer={() => props.scene.descriptor.navigation.dispatch(DrawerActions.openDrawer())}
 *      />
 *    )}
 *    drawerContent={(props) => <DrawerContent {...props} version={window.bundleInfo.version} />}
 * />
 * @see https://reactnavigation.org/docs/drawer-navigator/
 */
export const DrawerNav: VFC<DrawerNavProps> = ({
  routes,
  initialRouteName,
  header,
  drawerContent,
}) => {
  return (
    <Navigator
      initialRouteName={initialRouteName}
      drawerType="back"
      screenOptions={{
        headerShown: true,
        header,
      }}
      drawerContent={drawerContent}
    >
      {routes.map(({ name, component, label }) => (
        <Screen key={name} name={name} component={component} options={{ title: label }} />
      ))}
    </Navigator>
  );
};