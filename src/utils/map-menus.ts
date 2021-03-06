import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb'

// 判断路径是否是main
let firstMenu: any = null

// 动态注册路由函数
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 路径和选项保持一直函数
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  // findMenu  menu
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 面包屑获取路径函数
export function pathMapBreadcrumbs(
  userMenus: any[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []

  // for (const menu of userMenus) {
  //   if (menu.type === 1) {
  //     const findMenu = pathMapToMenu(menu.children, currentPath)
  //     if (findMenu) {
  //       breadcrumbs.push({ name: menu.name })
  //       breadcrumbs.push({ name: findMenu.name })
  //       return findMenu
  //     }
  //   } else if (menu.type === 2 && menu.url === currentPath) {
  //     return menu
  //   }
  // }

  pathMapToMenu(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}

// 根据用户菜单获取用户权限函数
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermission(userMenus)

  return permissions
}

export { firstMenu }
