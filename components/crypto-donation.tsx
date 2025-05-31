"use client"

import { useState } from "react"
import { Check, Copy, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CryptoWallet {
  name: string
  address: string
  qrCode: string
}

export function CryptoDonation() {
  const [copied, setCopied] = useState<string | null>(null)
  const [qrModalOpen, setQrModalOpen] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<CryptoWallet | null>(null)

  const cryptoWallets: CryptoWallet[] = [
    {
      name: "Bitcoin (BTC)",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      qrCode: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Tether (USDT)",
      address: "0x8b40d1c0caa5f347ead2acbecc8ee63c5b3b76d7",
      qrCode: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ripple (XRP)",
      address: "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
      qrCode: "/placeholder.svg?height=200&width=200",
    },
  ]

  const copyToClipboard = (address: string, name: string) => {
    navigator.clipboard.writeText(address)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

  const openQrModal = (wallet: CryptoWallet) => {
    setSelectedWallet(wallet)
    setQrModalOpen(true)
  }

  return (
    <div className="rounded-lg border p-6 bg-white">
      <h3 className="text-xl font-bold mb-4">Donate with Cryptocurrency</h3>
      <p className="text-muted-foreground mb-6">
        Support our mission with cryptocurrency donations. We accept Bitcoin, USDT, and XRP.
      </p>

      <Tabs defaultValue="bitcoin" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
          <TabsTrigger value="usdt">USDT</TabsTrigger>
          <TabsTrigger value="xrp">XRP</TabsTrigger>
        </TabsList>

        {cryptoWallets.map((wallet) => (
          <TabsContent key={wallet.name} value={wallet.name.toLowerCase().split(" ")[0]}>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-muted">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{wallet.name} Address:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(wallet.address, wallet.name)}>
                      {copied === wallet.name ? (
                        <>
                          <Check className="h-4 w-4 mr-1" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" /> Copy
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openQrModal(wallet)}>
                      <QrCode className="h-4 w-4 mr-1" /> QR Code
                    </Button>
                  </div>
                </div>
                <div className="bg-background p-3 rounded text-sm font-mono break-all">{wallet.address}</div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>
                  <strong>Important:</strong> Please ensure you're sending {wallet.name.split(" ")[0]} to the correct
                  address. Transactions on the blockchain are irreversible.
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={qrModalOpen} onOpenChange={setQrModalOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>{selectedWallet?.name} QR Code</DialogTitle>
            <DialogDescription>Scan this QR code to donate with {selectedWallet?.name}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="border p-2 rounded-md bg-white mb-4">
              <img
                src={selectedWallet?.qrCode || "/placeholder.svg"}
                alt={`${selectedWallet?.name} QR Code`}
                width={200}
                height={200}
              />
            </div>
            <div className="text-sm text-center text-muted-foreground">
              <p className="font-medium mb-1">{selectedWallet?.address}</p>
              <p>Please double-check the address before sending any funds.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
