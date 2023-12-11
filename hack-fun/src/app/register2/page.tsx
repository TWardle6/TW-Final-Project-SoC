//Register page tsx
'use client'

import { Input, Button } from '@supabase/ui'
import supabase from '../utils/supabase'

export default function Register2() {
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
}
      const { user } = supabase.auth.session(); // Get the current user
      const { username, name, about_me, linkedin_link, github_link, role_description, skills } = Object.fromEntries(
        new FormData(e.currentTarget)
      )
      if (
        typeof username === 'string' &&
        typeof name === 'string' &&
        typeof about_me === 'string' &&
        typeof linkedin_link === 'string' &&
        typeof github_link === 'string' &&
        typeof role_description === 'string' &&
        typeof skills === 'string'
      ) {
        await supabase
        .from('userprofiles')
        .insert(
          {
            uuid: user.id, // Include the user's UUID
            username,
            name,
            about_me,
            linkedin_link,
            github_link,
            role_description,
            skills,
          },
        )
      }
    }

/*    e.preventDefault()
const { username, name, about_me, linkedin_link, github_link, role_description, skills } = Object.fromEntries(
  new FormData(e.currentTarget)
)
if (
  typeof username === 'string' &&
  typeof name === 'string' &&
  typeof about_me === 'string' &&
  typeof linkedin_link === 'string' &&
  typeof github_link === 'string' &&
  typeof role_description === 'string' &&
  typeof skills === 'string'
) {
  await supabase
    .from('user_profiles')
    .insert([
      {
        username,
        name,
        about_me,
        linkedin_link,
        github_link,
        role_description,
        skills,
      },
    ])
}
}*/
    /*e.preventDefault()
    const { username, name, about_me, linkedin_link, github_link, role_description, skills } = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    if (
      typeof username === 'string' &&
      typeof name === 'string' &&
      typeof about_me === 'string' &&
      typeof linkedin_link === 'string' &&
      typeof github_link === 'string' &&
      typeof role_description === 'string' &&
      typeof skills === 'string'
    ) {
      await supabase
      .from(userprofiles)
      (
        {
          username,
          name,
          about_me,
          linkedin_link,
          github_link,
          role_description,
          skills,
        },
      )
    }
  }*/



  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <Input type="username" name="username" label="Username" />
        <Input type="Full Name" name="Full Name" label="Full Name" />
        <Input type="About Me" name="About Me" label="About Me" />
        <Input type="LinkedIn" name="LinkedIn" label="LinkedIn" />
        <Input type="Github" name="Github" label="Github" />
        <Input type="Role Description" name="Role Description" label="Are you a bootcamper, exbootcamper or a mentor?" />
        <Input type="Skills" name="Skills" label="Please give us a brief summary of you skills and the tech you have experience with" />
        <Button type="primary" htmlType="submit">
          Finish Creating my Profile
        </Button>
      </form>
    </div>
  )
}