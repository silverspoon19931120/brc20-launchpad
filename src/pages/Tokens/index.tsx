import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import { PageName } from 'analytics/constants'
import { Trace } from 'analytics/Trace'
import { MAX_WIDTH_MEDIA_BREAKPOINT, MEDIUM_MEDIA_BREAKPOINT, MOBILE_MEDIA_BREAKPOINT } from 'components/Tokens/constants'
import { filterStringAtom } from 'components/Tokens/state'
import NetworkFilter from 'components/Tokens/TokenTable/NetworkFilter'
import SearchBar from 'components/Tokens/TokenTable/SearchBar'
import TimeSelector from 'components/Tokens/TokenTable/TimeSelector'
import TokenTable, { LoadingTokenTable } from 'components/Tokens/TokenTable/TokenTable'
import { PAGE_SIZE } from 'graphql/data/TopTokens'
import { chainIdToBackendName, isValidBackendChainName } from 'graphql/data/util'
import { useOnGlobalChainSwitch } from 'hooks/useGlobalChainSwitch'
import { useResetAtom } from 'jotai/utils'
import { Suspense, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'
import airdrop from '../../assets/images/airdrop.png'
import bot from '../../assets/images/bot.png'

const ExploreContainer = styled.div`
  width: 100%;
  min-width: 320px;
  padding: 68px 12px 0px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`
export const TitleContainer = styled.div`
  margin-bottom: 32px;
  margin-left: 70px;
  margin-right: auto;
  display: flex;
  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    margin-left: auto;

  }
`
const FiltersContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 40px;

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    order: 2;
  }
`
const Desktop = styled.div`
  display: flex;

  @media only screen and (max-width: ${MOBILE_MEDIA_BREAKPOINT}) {
   display:none;
  }
`
const Mobile = styled.div`
  display: none;

  @media only screen and (max-width: ${MOBILE_MEDIA_BREAKPOINT}) {
    display: flex;
    flex-direction:column;
  }
`
const SearchContainer = styled(FiltersContainer)`
  margin-left: 8px;

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    margin: 0px;
    order: 1;
    diaplay:none
  }
`
const FiltersWrapper = styled.div`
  display: flex;
  max-width: ${MAX_WIDTH_MEDIA_BREAKPOINT};
  margin: 0 auto;
  margin-bottom: 20px;

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    flex-direction: column;
    gap: 8px;
  }
`

const Tokens = () => {
  const resetFilterString = useResetAtom(filterStringAtom)
  const location = useLocation()
  const navigate = useNavigate()
  const { chainName: chainNameParam } = useParams<{ chainName?: string }>()
  const { chainId: connectedChainId } = useWeb3React()
  const connectedChainName = chainIdToBackendName(connectedChainId)

  const [rowCount, setRowCount] = useState(PAGE_SIZE)

  useEffect(() => {
    resetFilterString()
  }, [location, resetFilterString])

  useEffect(() => {
    if (!chainNameParam) {
      navigate(`/tokens/${connectedChainName.toLowerCase()}`, { replace: true })
    }
  }, [chainNameParam, connectedChainName, navigate])

  useOnGlobalChainSwitch((chain) => {
    if (isValidBackendChainName(chain)) {
      navigate(`/tokens/${chain.toLowerCase()}`, { replace: true })
    }
  })

  return (
    <Trace page={PageName.TOKENS_PAGE} shouldLogImpression>

      <ExploreContainer>
      <img src={bot}  className='botAbsolute' />

        <TitleContainer>
          <ThemedText.LargeHeader>
            <Trans><span style={{display:'flex'}}> <h3 className='heading'>BRC-20 Tokens(<span>14,1552</span> total)</h3> </span></Trans>
            <h3 className='sub-heading'>Total Market Cap <span>$539,927,431</span></h3>
          </ThemedText.LargeHeader>
        </TitleContainer>

        {/* <Desktop style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px' }}>
            <img src={airdrop} width='auto' height='auto' />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <img src={bot} width='auto' height={80} />
            <p style={{ fontSize: 11 }}>Total Market Cap <span style={{ color: '#F38010' }}>$539,927,431</span></p>
          </div>
        </Desktop> */}

        <div className='airdrop'>
          <img src={airdrop} width='70%' height='auto' />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={bot} width='auto' height={80} />
            <p className='marketCap'>Total Market Cap <span style={{ color: '#F38010' }}>$539,927,431</span></p>
          </div>
        </div>

        <FiltersWrapper>
          <FiltersContainer>
            <NetworkFilter />
            <TimeSelector />
          </FiltersContainer>
          <div className="search-container">
            <SearchContainer>
              <SearchBar />

            </SearchContainer>
            <div className='filter' style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 10, flex: 1, width: '100%' }}>
              <span>|</span>
              <p style={{ background: '#F380101A', padding: 5, borderRadius: 3, color: '#F38010' }}>All</p>
              <p>In Progress</p>

              <p>Completed</p>
            </div>
          </div>

        </FiltersWrapper>
        <Suspense fallback={<LoadingTokenTable rowCount={rowCount} />}>
          <TokenTable setRowCount={setRowCount} />
        </Suspense>
      </ExploreContainer>
    </Trace>
  )
}

export default Tokens
