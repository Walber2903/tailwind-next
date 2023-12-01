import { SettingsTabs } from './components/SettingsTabs'
import * as Input from './components/Input'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { UploadTrigger } from './components/Form/FileInput/UploadTrigger'
import { ImagePreview } from './components/Form/FileInput/ImagePreview'
import { FileList } from './components/Form/FileInput/FileList'
import { Root } from './components/Form/FileInput/Root'
import { ControlInput } from './components/Form/FileInput/ControlInput'
import { SelectList } from './components/Form/SelectList'
import { SelectItem } from './components/Form/SelectList/SelectItem'
import { TextArea } from './components/Form/TextArea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-violet-800"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
          action=""
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="font-zinc-700 text-sm font-medium"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Walber" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl id="lastName" defaultValue="Araujo" />
              </Input.InputRoot>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="emailAddress"
              className="font-zinc-700 text-sm font-medium"
            >
              Email address
            </label>

            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl
                id="emailAddress"
                type="email"
                defaultValue="walber.menezes@hotmail.com"
              />
            </Input.InputRoot>

            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="font-zinc-700 text-sm font-medium"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <Root className="flex items-start gap-5">
              <ImagePreview />

              <UploadTrigger />

              <ControlInput />
            </Root>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="font-zinc-700 text-sm font-medium">
              Role
            </label>

            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue="Backend developer" />
            </Input.InputRoot>

            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="font-zinc-700 text-sm font-medium"
            >
              Country
            </label>
            <SelectList placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="cd" text="Canada" />
              <SelectItem value="us" text="United States" />
            </SelectList>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="font-zinc-700 text-sm font-medium"
            >
              Timezone
            </label>

            <SelectList placeholder="Select a Timezone">
              <SelectItem value="utc-03" text="Sao Paulo (UTC-03:00)" />
              <SelectItem value="utc-04" text="Toronto (UTC-04:00)" />
              <SelectItem
                value="utc-08"
                text="Pacific Standard Time (UTC-08:00)"
              />
            </SelectList>

            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="font-zinc-700 text-sm font-medium">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <SelectList placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                  <SelectItem value="it" text="Italic" />
                </SelectList>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a fullstack engineer based in Vancouver, Canada. I'm specializing in React and this ecossystem, with a strong backend with nodeJs and python."
              />
            </div>

            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="font-zinc-700 text-sm font-medium"
            >
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <Root>
              <UploadTrigger />
              <FileList />

              <ControlInput multiple />
            </Root>

            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-violet-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
