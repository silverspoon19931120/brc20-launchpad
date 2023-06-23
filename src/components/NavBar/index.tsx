import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import Web3Status from 'components/Web3Status'
import { NftVariant, useNftFlag } from 'featureFlags/flags/nft'
import { chainIdToBackendName } from 'graphql/data/util'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { UniIcon } from 'nft/components/icons'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'

import { ChainSelector } from './ChainSelector'
import { MenuDropdown } from './MenuDropdown'
import { SearchBar } from './SearchBar'
import { ShoppingBag } from './ShoppingBag'
import * as styles from './style.css'


import launch from '../../assets/images/launch.png'
import twitter from '../../assets/images/twitter.png'
import discord from '../../assets/images/discord.png'
import menu from '../../assets/images/menu.png'
interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode

}

const MenuItem = ({ href, id, isActive, children }: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none', fontSize: 13 }}
    >
      {children}
    </NavLink>
  )
}

const PageTabs = () => {
  const { pathname } = useLocation()
  const nftFlag = useNftFlag()
  const { chainId: connectedChainId } = useWeb3React()
  const chainName = chainIdToBackendName(connectedChainId)

  const isPoolActive =
    pathname.startsWith('/pool') ||
    pathname.startsWith('/add') ||
    pathname.startsWith('/remove') ||
    pathname.startsWith('/increase') ||
    pathname.startsWith('/find')

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      {/* <MenuItem href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem> */}
      <MenuItem href={`/tokens/${chainName.toLowerCase()}`} isActive={pathname.startsWith('/tokens')}>
        <Trans><p style={{ whiteSpace: 'nowrap' }}>{'{ '}&nbsp;{'}'} BRC-20</p> </Trans>
      </MenuItem>

      {/* <MenuItem href={`/tokens/${chainName.toLowerCase()}`} isActive={pathname.startsWith('/tokens')}>
        <Trans>Tokens</Trans>
      </MenuItem> */}
      <MenuItem href={`#`} isActive={pathname.startsWith('/Lauchpad')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>

          <img src={launch} alt="" width={16} height={16} />
          <Trans>Launchpad</Trans>
        </div>

      </MenuItem>

      {nftFlag === NftVariant.Enabled && (
        <MenuItem href="/nfts" isActive={pathname.startsWith('/nfts')}>
          <Trans>NFTs</Trans>
        </MenuItem>
      )}
      {/* <MenuItem href="/pool" id={'pool-nav-link'} isActive={isPoolActive}>
        <Trans>Pool</Trans>
      </MenuItem> */}
    </div>
  )
}

const Navbar = () => {
  const { pathname } = useLocation()
  const isNftPage = pathname.startsWith('/nfts') || pathname.startsWith('/profile')

  return (
    <>
      <nav className={styles.nav} style={{background:'#111524'}}>
        <Box display="flex" height="full" flexWrap="nowrap" alignItems="center">
          <div className='menu'>
            <img src={menu} alt="" width={30} />
          </div>
          <Box className={styles.leftSideContainer}>
            <Box as="a" href="#/tokens" className={styles.logoContainer}>
              <UniIcon width="48" height="48" className={styles.logo} />
              <p style={{ color: "#fff", fontSize: '10px' }}>BRC-20 DAO</p>
            </Box>
            {/* {!isNftPage && (
              <Box display={{ sm: 'flex', lg: 'none' }}>
                <ChainSelector leftAlign={true} />
              </Box>
            )} */}
            <Row gap="8" display={{ sm: 'none', lg: 'flex' }}>
              <PageTabs />
            </Row>
          </Box>
          <Box className={styles.middleContainer}>
            {/* <SearchBar /> */}
          </Box>
          <Box className={styles.rightSideContainer} >
            <NavLink to='#' className='desktopLink' >
              <img src={twitter} alt="" style={{ background: '#9B9BB0', height: 20, width: 20, padding: 5, borderRadius: '50%' }} />
            </NavLink>
            <NavLink to='#' className='desktopLink' >
              <img src={discord} alt="" style={{ background: '#9B9BB0', height: 20, width: 20, padding: 5, borderRadius: '50%' }} />
            </NavLink>



            <button className='connectButton'>
              <Web3Status />
            </button>
            <Row gap="12">
              {/* <Box display={{ sm: 'flex', xl: 'none' }}>
                <SearchBar />
              </Box> */}
              {/* <Box display={{ sm: 'none', lg: 'flex' }}>
                <MenuDropdown />
              </Box>
              {isNftPage && <ShoppingBag />}
              {!isNftPage && (
                <Box display={{ sm: 'none', lg: 'flex' }}>
                  <ChainSelector />
                </Box>
              )} */}


            </Row>
          </Box>
        </Box>
      </nav>
      {/* <Box className={styles.mobileBottomBar}>
        <PageTabs />
        <Box marginY="4">
          <MenuDropdown />
        </Box>
      </Box> */}
    </>
  )
}

export default Navbar
