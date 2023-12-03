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
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
          action=""
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Walber" />
              </Input.InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="font-zinc-700 text-sm font-medium dark:text-zinc-300 lg:sr-only"
                >
                  Last Name
                </label>
              </div>
              <Input.InputRoot>
                <Input.InputControl id="lastName" defaultValue="Araujo" />
              </Input.InputRoot>
            </div>
            <div />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="emailAddress"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <ImagePreview />

              <UploadTrigger />

              <ControlInput />
            </Root>
            <div />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Role
            </label>

            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue="Backend developer" />
            </Input.InputRoot>

            <div />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
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
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a fullstack engineer based in Vancouver, Canada. I'm specializing in React and this ecossystem, with a strong backend with nodeJs and python."
              />
            </div>

            <div />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
