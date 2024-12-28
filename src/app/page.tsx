'use client';

import { Section, Cell, Image, List, FixedLayout, Button } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';

import tonSvg from './_assets/logo.png';
import { SectionHeader } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader';
import { TonConnectButton } from '@tonconnect/ui-react';

export default function Home() {
  const t = useTranslations('i18n');

  return (
    <Page back={false}>
      <FixedLayout
        vertical='top'
        style={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Button
          before={
            <Image
              src={tonSvg.src}
              alt='OribiTON Logo'
              size={40}

              style={{
                background: 'transparent',
                borderWidth: 0,
              }}
              // style={{ backgroundColor: '#007AFF' }} // TODO: update later
            />
          }
          size='l'
          mode='plain'
        >
          OrbiTON
        </Button>

        {/* Connect button */}
        <TonConnectButton
          style={{

          }}
        />
      </FixedLayout>
    </Page>
  );
}

/* <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link href="/ton-connect">
            <Cell
              before={
                <Image
                  src={tonSvg.src}
                  style={{ backgroundColor: '#007AFF' }}
                  alt='TON Connect'
                />
              }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link href="/init-data">
            <Cell subtitle="User data, chat information, technical data">
              Init Data
            </Cell>
          </Link>
          <Link href="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">
              Launch Parameters
            </Cell>
          </Link>
          <Link href="/theme-params">
            <Cell subtitle="Telegram application palette information">
              Theme Parameters
            </Cell>
          </Link>
        </Section>
        <Section header={t('header')} footer={t('footer')}>
          <LocaleSwitcher/>
        </Section>
      </List> */
